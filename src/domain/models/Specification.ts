class Specification {
    id: string
    name: string;
    description: string;
    created_at: Date

    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
    }
}

export { Specification }