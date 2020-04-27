export interface StateService {
    quoteService: QuoteService;
    panelPlacementService: PanelPlacementService;
    getData: () => object;
}

export type Renderer = {
    renderUi: Function
    renderContent: Function
}

export interface UiService {
    renderer: Renderer
    addUserFileInput(onChosen): void;
    removeUserFileInput(): void;
}

export interface QuoteService {
    constructor: (initialData: any) => void
}

export interface PanelPlacementService {
    constructor: (initialData: any) => void
}

export interface ApiService {
    save: (data: any) => Promise<void>

    getData: Function
}