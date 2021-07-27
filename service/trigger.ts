import {Launcher, requests} from "./ServiceLauncher"

import {get_user} from "./user";
requests.set("get_person", new Launcher().set_launcher(get_user))

export const trigger = {
    initial: async (trigger_name: string, data: any) => {
        let loader = requests.get(trigger_name)
        loader.set_params(data)
        return await loader.builder()
    },
}
