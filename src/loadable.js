import loadable from "@loadable/component";

export const Foo = loadable(() => import("./Foo"));

export const Bar = loadable(() => import("./Bar"));
