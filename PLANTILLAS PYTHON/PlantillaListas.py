class Lista:
    def __init__(self):
        self.items = []

    def agregar(self, elemento):
        self.items.append(elemento)

    def eliminar(self, indice):
        if 0 <= indice < len(self.items):
            eliminado = self.items.pop(indice)
            print(f">> Se eliminó: {eliminado}")

    def buscar(self, valor):
        for i, elemento in enumerate(self.items):
            if elemento == valor:
                return i
        return -1                              # -1 = no encontrado

    def modificar(self, indice, nuevo_valor):
        if 0 <= indice < len(self.items):
            self.items[indice] = nuevo_valor

    def mostrar(self):
        for i, elemento in enumerate(self.items):
            print(f"[{i}] {elemento}")


if __name__ == "__main__":
    mi_lista = Lista()
    mi_lista.agregar("dato 1")
    mi_lista.agregar("dato 2")
    mi_lista.mostrar()
    print("Índice de 'dato 2':", mi_lista.buscar("dato 2"))