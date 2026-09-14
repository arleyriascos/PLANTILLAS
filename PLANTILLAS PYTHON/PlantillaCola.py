class Cola:
    def __init__(self):
        self.items = []

    def is_empty(self):
        return len(self.items) == 0

    def enqueue(self, elemento):
        self.items.append(elemento)          # entra por el FINAL
        print(f">> Entró a la cola: {elemento}")

    def dequeue(self):
        if not self.is_empty():
            atendido = self.items.pop(0)      # sale por el PRIMERO (clave del FIFO)
            print(f">> Salió de la cola: {atendido}")
            return atendido
        print(">> La cola está vacía.")
        return None

    def frente(self):
        if not self.is_empty():
            return self.items[0]
        return None

    def mostrar(self):
        print("Cola actual:", self.items)


if __name__ == "__main__":
    mi_cola = Cola()
    mi_cola.enqueue("cliente 1")
    mi_cola.enqueue("cliente 2")
    mi_cola.mostrar()
    mi_cola.dequeue()
    mi_cola.mostrar()