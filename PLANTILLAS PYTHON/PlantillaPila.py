class Pila:
    def __init__(self):
        self.items = []                      # aquí se guardan los datos

    def is_empty(self):
        return len(self.items) == 0

    def push(self, elemento):
        self.items.append(elemento)
        print(f">> Se agregó: {elemento}")

    def pop(self):
        if not self.is_empty():
            eliminado = self.items.pop()
            print(f">> Se quitó: {eliminado}")
            return eliminado
        print(">> La pila está vacía.")
        return None

    def top(self):
        if not self.is_empty():
            return self.items[-1]
        return None

    def mostrar(self):
        print("Pila actual:", self.items)


# ---- USO (esto es lo que tú vas a escribir/adaptar en el examen) ----
if __name__ == "__main__":
    mi_pila = Pila()
    mi_pila.push("elemento 1")
    mi_pila.push("elemento 2")
    mi_pila.mostrar()
    mi_pila.pop()
    mi_pila.mostrar()