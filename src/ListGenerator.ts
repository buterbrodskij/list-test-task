const Y_ITEMS_COUNT = 100;
const X_ITEMS_COUNT = 10;

export interface IListItem {
    y: number;
    x: number;
    int: () => number;
}

class ListGenerator {
    private _list: IListItem[][] = [];

    private _getRandomInt(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min) + min);
    }

    private _generateXItems(count = X_ITEMS_COUNT) {
        return this._getRandomInt(count, 100);
    }

    private _generateYItems(count = Y_ITEMS_COUNT) {
            return this._getRandomInt(count, 1000)
    }

    clearList() {
        this._list = []
    }

    get isListFilled() {
        return Boolean(this._list.length)
    }
    generateList(x: number = X_ITEMS_COUNT, y: number = Y_ITEMS_COUNT) {
        if (this.isListFilled) {
            this.clearList()
        }


        const [generatedY, generatedX] = [this._generateYItems(y), this._generateXItems(x)];

        for(let i = 0; i <= generatedY; i++) {
            const row = [];

            for(let j = 0; j <= generatedX; j++) {
                row.push(
                    {
                        y: i,
                        x: j,
                        int: () => this._getRandomInt(0, 100)
                    }
                )
            }

            this._list.push(row)
        }

        return [...this._list]
    };
}

export default ListGenerator;