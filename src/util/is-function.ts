function isFunction(obj: any): boolean {
    return typeof obj === "function" && !(obj instanceof RegExp)
}