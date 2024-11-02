// src/components/FacialRecognition/RunHuman.tsx
import { Component } from "react";
import type { Human, Config } from "@vladmandic/human";
import { log, status } from "./logging";

const config: Partial<Config> = {
  debug: true,
  modelBasePath: "https://cdn.jsdelivr.net/npm/@vladmandic/human/models",
  face: {
    enabled: true,
    detector: { enabled: true },
    mesh: { enabled: true },
    iris: { enabled: true },
    emotion: { enabled: true },
  },
  body: { enabled: false },
  hand: { enabled: false },
  object: { enabled: false },
};

interface Props {
  inputId: string;
  outputId: string;
}
interface State {
  ready: boolean;
  frame: number;
}

class RunHuman extends Component<Props, State> {
  HumanImport: any;
  human: Human | undefined = undefined;
  video: HTMLVideoElement | undefined = undefined;
  canvas: HTMLCanvasElement | undefined = undefined;
  timestamp: number = 0;
  fps: number = 0;

  constructor(props: Props) {
    super(props);
    if (typeof document === "undefined") return;
    this.video =
      (document.getElementById(this.props.inputId) as HTMLVideoElement | undefined) ||
      document.createElement("video");
    this.canvas =
      (document.getElementById(this.props.outputId) as HTMLCanvasElement | undefined) ||
      document.createElement("canvas");
    import("@vladmandic/human").then((H) => {
      this.human = new H.default(config) as Human;
      log("human version:", this.human.version, "| tfjs version:", this.human.tf.version["tfjs-core"]);
      log("platform:", this.human.env.platform, "| agent:", this.human.env.agent);
      status("loading models...");
      this.human.load().then(() => {
        log("backend:", this.human!.tf.getBackend(), "| available:", this.human!.env.backends);
        log("loaded models:" + Object.values(this.human!.models).filter((model) => model !== null).length);
        status("initializing...");
        this.human!.warmup().then(() => {
          this.setState({ ready: true });
          status("ready...");
        });
      });
    });
  }

  override async componentDidMount() {
    if (this.video)
      this.video.onresize = () => {
        this.canvas!.width = this.video!.videoWidth;
        this.canvas!.height = this.video!.videoHeight;
      };
    if (this.canvas)
      this.canvas.onclick = () => {
        this.video?.paused ? this.video?.play() : this.video?.pause();
      };
  }

  override render(this: RunHuman) {
    if (this && this.state && this.state.ready) this.detect();
    if (!this || !this.video || !this.canvas || !this.human || !this.human.result) return null;

    if (!this.video.paused) {
      const interpolated = this.human.next(this.human.result);
      this.human.draw.canvas(this.video, this.canvas);
      this.human.draw.all(this.canvas, interpolated);

      if (interpolated && interpolated.face) {
        interpolated.face.forEach((face) => {
          console.log(`Detected Age: ${face.age}`);
        });
      }
    }

    status(this.video.paused ? "paused" : `fps: ${this.fps.toFixed(1).padStart(5, " ")}`);
    return null;
  }

  async detect(this: RunHuman) {
    if (!this || !this.human || !this.video || !this.canvas) return;
    await this.human.detect(this.video);
    const now = this.human.now();
    this.fps = 1000 / (now - this.timestamp);
    this.timestamp = now;
    this.setState({ ready: true, frame: this.state.frame + 1 });
  }
}

export default RunHuman;
