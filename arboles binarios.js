class ArbolBinario
{
    constructor (numero)
    {
        this.raiz=numero;
        this.hijoIzq=null;
        this.hijoDer=null;
    }
}


class Control
{
    constructor()
    {
    this.raiz=null;
    }
}


function Agregar(nuevo)
    {
        if (this.raiz==null)
        this.raiz=nuevo;
        else
        this.queTeAtienda(nuevo, this.raiz);
    }
function queTeAtienda(nuevo, nodo)
    {
        if (nuevo>nodo)
            if (nodo.hijoIzq==null)
                nodo.hijoIzq=nuevo;
            else
                this.queTeAtienda(nuevo, nodo.hijoIzq);
        else
            if (nodo.hijoDer==null)
                nodo.hijoDer=nuevo;
            else
                this.queTeAtienda(nuevo, nodo.hijoDer);
    }


function Buscar(numero)
    {
        if (this.raiz==numero)
            console.log(this.raiz);
        else
            this.ProcesaBusqueda(numero, this.raiz);
    }
function ProcesaBusqueda(numero, nodo)
    {
        if (numero>nodo)
            if (nodo.hijoIzq==numero)
                console.log(nodo.hijoIzq);
            else
                this.ProcesaBusqueda(numero, nodo.hijoIzq);
        else
            if (nodo.hijoDer==numero)
                console.log(nodo.hijoDer);
            else
                this.ProcesaBusqueda(numero, nodo.hijoDer);
    }


function InOrder()
    {
        if (this.raiz==null)
            console.log("");
        else
             this.ProcesaInOrder(this.raiz);
    }   
function ProcesaInOrder(nodo)  //I R D 
    {
        if (nodo.hijoIzq!=null)  //I
            this.ProcesaInOrder(nodo.hijoIzq);
        console.log(nodo);  // R
        if (nodo.hijoDer!=null)  //D
            this.ProcesaInOrder(nodo.hijoDer);
    }


function PreOrder()
    {
        if (this.raiz==null)
            console.log("");
        else
            this.ProcesaPreOrder(this.raiz);
    }    
function ProcesaPreOrder(nodo)  //R I D 
    {
        console.log(nodo);  // R
        if (nodo.hijoIzq!=null)  //I
            this.ProcesaPreOrder(nodo.hijoIzq);
        if (nodo.hijoDer!=null)  //D
            this.ProcesaPreOrder(nodo.hijoDer);
    }


function PostOrder()
    {
        if (this.raiz==null)
            console.log("");
        else
             this.ProcesaPostOrder(this.raiz);
    }    
function ProcesaPostOrder(nodo)  //I D R
    {
        
        if (nodo.hijoIzq!=null)  //I
            this.ProcesaPostOrder(nodo.hijoIzq);
        if (nodo.hijoDer!=null)  //D
            this.ProcesaPostOrder(nodo.hijoDer);
        console.log(nodo);  // R
    }
