export interface TimeEvent {
    id: number;
    date: string;
    event: string;
}

export interface TimeInterface {
    id: string;
    Dates: string;
    Area: string;
    Events: TimeEvent[];
}
