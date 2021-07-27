class ServiceLauncher {
    params?: any;
    launcher?: Function;
    middleware?: Function;

    constructor(params?: any, launcher?: Function) {
        this.params = params
        this.launcher = launcher
    }
    set_params(params: any) {
        this.params = params;
        return this;
    }
    set_launcher(launcher: Function) {
        this.launcher = launcher;
        return this;
    }

    async builder() {
        if (!this.launcher) {
            return {status: 404, msg: "Request not Found"}
        } else {
            return await this.launcher(this.params)
        }
    }
}

export const Launcher = ServiceLauncher
export let requests = new Map();