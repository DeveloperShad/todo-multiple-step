
export const getSerialNo = (todo) => {
    for (let i = 0; i < todo.length - 1; i++) {
        if (todo[i + 1].serialNo - todo[i].serialNo === 1) continue
        else return todo[i].serialNo + 1
    }
    return todo.length + 1
}

export const swapItem = (todo, id, swapValue) => {
    return todo.map((item) => item.id === id ? { ...item, step: item.step + swapValue } : item)
}

