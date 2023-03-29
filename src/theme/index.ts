import { scheme } from "./monokai";

export function background(key: string) {
    return `bg-[${scheme["bg-" + key]}]`;
}