class Cola<T> {
  private items: T[] = [];

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  enqueue(elemento: T): void {
    this.items.push(elemento);              // entra por el FINAL
    console.log(`>> Entró a la cola: ${elemento}`);
  }

  dequeue(): T | null {
    if (!this.isEmpty()) {
      const atendido = this.items.shift() as T;   // sale por el PRIMERO (clave del FIFO)
      console.log(`>> Salió de la cola: ${atendido}`);
      return atendido;
    }
    console.log(">> La cola está vacía.");
    return null;
  }

  frente(): T | null {
    if (!this.isEmpty()) {
      return this.items[0];
    }
    return null;
  }

  mostrar(): void {
    console.log("Cola actual:", this.items);
  }
}

// ---- USO ----
const miCola = new Cola<string>();
miCola.enqueue("cliente 1");
miCola.enqueue("cliente 2");
miCola.mostrar();
miCola.dequeue();
miCola.mostrar();