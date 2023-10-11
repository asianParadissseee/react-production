// type Mods = Record<string, boolean | string>
//
// export function classNames (cls?: string, mods?: Mods, additional?: string[]): string {
//     return [
//         cls,
//         ...additional.filter(Boolean),
//         ...Object.entries(mods).filter(([className, value]) => Boolean(value))
//             .map(([className, value]) => className)
//     ].join(' ')
// }
//
// //  example
// // classNames("remove-btn", {hovered: true, selectable: true, red: false}, ["pdg"])
//
// // "remove-btn hovered selectable pdg"

type Mods = Record<string, boolean | string>

export function classNames (cls?: string, mods?: Mods, additional?: string[]): string {
    const classList: string[] = []

  // Check if cls is defined and not empty
  if (cls && cls.trim() !== '') {
        classList.push(cls)
  }

    // Check if additional is an array and add its non-empty elements
    if (Array.isArray(additional)) {
        classList.push(...additional.filter(Boolean))
  }

    // Check if mods is an object and add class names based on its truthy values
    if (mods && typeof mods === 'object') {
        for (const [className, value] of Object.entries(mods)) {
            if (value) {
                classList.push(className)
      }
        }
    }

    return classList.join(' ')
}
