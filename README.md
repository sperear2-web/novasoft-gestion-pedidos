# NovaSoft - Sistema de Gestión de Pedidos

Proyecto desarrollado para la práctica de **Gestión de la Configuración de Software**
(UNEMI). Simula el trabajo colaborativo de un equipo de desarrollo utilizando Git
para resolver cinco situaciones reales de control de versiones.

## Estructura del proyecto

- `index.html` — página principal de la aplicación.
- `styles.css` — estilos de la interfaz.
- `app.js` — lógica de la aplicación (listar pedidos).
- `pedidos.js` — datos/modelo de pedidos.
- `README.md` — este archivo.

## Situaciones resueltas (ver documento de la práctica)

1. Corrección de un cambio defectuoso realizado directamente en `main` (`git revert`).
2. Eliminación de un commit no deseado en una rama de desarrollo (`git rebase -i`).
3. Recuperación de un archivo eliminado accidentalmente (`git checkout` desde el historial).
4. Resolución de un conflicto de fusión entre dos ramas (`git merge` + resolución manual).
5. Identificación de una versión estable mediante una etiqueta (`git tag`).

Historial completo verificable con:

```
git log --oneline --graph --all
```
