class Lista<T> {
  private items: T[] = [];

  agregar(elemento: T): void {
    this.items.push(elemento);
  }

  eliminar(indice: number): void {
    if (indice >= 0 && indice < this.items.length) {
      const eliminado = this.items.splice(indice, 1)[0];
      console.log(`>> Se eliminó: ${eliminado}`);
    }
  }

  buscar(valor: T): number {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i] === valor) {
        return i;
      }
    }
    return -1;                              // -1 = no encontrado
  }

  modificar(indice: number, nuevoValor: T): void {
    if (indice >= 0 && indice < this.items.length) {
      this.items[indice] = nuevoValor;
    }
  }

  mostrar(): void {
    for (let i = 0; i < this.items.length; i++) {
      console.log(`[${i}] ${this.items[i]}`);
    }
  }
}

// ---- USO ----
const miLista = new Lista<string>();
miLista.agregar("dato 1");
miLista.agregar("dato 2");
miLista.mostrar();
console.log("Índice de 'dato 2':", miLista.buscar("dato 2"));