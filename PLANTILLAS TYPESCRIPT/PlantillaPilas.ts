class Pila<T> {
  private items: T[] = [];               // aquí se guardan los datos

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  push(elemento: T): void {
    this.items.push(elemento);
    console.log(`>> Se agregó: ${elemento}`);
  }

  pop(): T | null {
    if (!this.isEmpty()) {
      const eliminado = this.items.pop() as T;
      console.log(`>> Se quitó: ${eliminado}`);
      return eliminado;
    }
    console.log(">> La pila está vacía.");
    return null;
  }

  top(): T | null {
    if (!this.isEmpty()) {
      return this.items[this.items.length - 1];
    }
    return null;
  }

  mostrar(): void {
    console.log("Pila actual:", this.items);
  }
}

// ---- USO ----
const miPila = new Pila<string>();
miPila.push("elemento 1");
miPila.push("elemento 2");
miPila.mostrar();
miPila.pop();
miPila.mostrar();