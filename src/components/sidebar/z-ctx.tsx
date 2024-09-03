import { createContext, useContext, useState, type ReactNode } from "react"
import type { StoreApi } from "zustand"

export function createZustandContext<TInitial, TStore extends StoreApi<any>>(
	getStore: (initial: TInitial) => TStore,
) {
	const ZContext = createContext(null as any as TStore)

	const Provider = (props: {
		children?: ReactNode
		initialValue: TInitial
	}) => {
		const [store] = useState(() => getStore(props.initialValue))

		return <ZContext.Provider value={store}>{props.children}</ZContext.Provider>
	}

	return {
		useContext: () => useContext(ZContext),
		ZContext,
		Provider,
	}
}
