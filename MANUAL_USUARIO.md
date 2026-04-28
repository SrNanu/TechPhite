        # Manual de Usuario - Sistema de Gestión de Club

Bienvenido al sistema de gestión de socios y cobranzas. Este documento detalla el funcionamiento completo de la aplicación, sus reglas y los procedimientos recomendados.

---

## 1. Conceptos Fundamentales

### El Socio y su Estado
Un **Socio** en el sistema es cualquier persona registrada. Su "Estado" se calcula automáticamente basándose en sus compromisos financieros:
*   **ACTIVO**: El socio tiene la "Cuota Social" asignada y está al día con sus pagos (o debe menos de 3 meses).
*   **INACTIVO**: El socio tiene la "Cuota Social" asignada pero debe 3 o más meses. Pierde beneficios pero sigue en el sistema.
*   **NO_SOCIO**: Persona registrada que NO tiene asignada la "Cuota Social". Puede participar en actividades (ej: Fútbol) pero no goza de descuentos de socio.

### Categorías y Precios
Las **Categorías** representan los conceptos que se cobran (Cuota Social, Fútbol, Gimnasio, etc.).
*   **Cuota Social (Categoría Core)**: Es la categoría más importante. Es la que define si alguien es "Socio" o no. No puede eliminarse.
*   **Monto Actual**: Es el precio vigente de la categoría. Si cambias este precio, las cuotas *ya generadas* no cambian (ver Regla de Inmutabilidad).

---

## 2. Roles de Usuario

El sistema tiene dos tipos de acceso:

### Administrador (ADMIN)
Tiene control total sobre el club:
*   Crear y editar socios.
*   Crear, editar y eliminar categorías (y cambiar sus precios).
*   Gestionar otros usuarios (Cobradores).
*   Ver estadísticas completas del dashboard.

### Cobrador (COBRADOR)
Usuario enfocado en la operación diaria:
*   Buscar socios y ver su estado de deuda.
*   Registrar cobros de cuotas pendientes.
*   Generar cuotas adelantadas si un socio quiere pagar meses futuros.
*   Cargar egresos (gastos) si tiene permiso.
*   **Restricción Importante**: Un cobrador puede estar limitado a ver solo ciertas categorías (ej: un cobrador que solo maneja Fútbol).

---

## 3. Reglas de Negocio (Lo que se puede y no se puede hacer)

### Pagos Exactos (Prohibido Pagos Parciales)
**No se pueden realizar pagos parciales.** Si una cuota es de $3000, el sistema solo permite cobrar $3000. 
*   *¿Por qué?*: Para mantener la contabilidad simple y evitar deudas fraccionadas difíciles de auditar. Si un socio quiere pagar menos, el Administrador debería ajustar el precio de la categoría o aplicar un descuento antes de generar la cuota.

### Inmutabilidad de Cuotas (Snapshot de Precio)
Cuando se genera una cuota (ya sea el día 1 de cada mes o manualmente), el sistema toma una "foto" del precio actual.
*   *Ejemplo*: Si la cuota de Mayo se generó a $2000, y en Junio aumentas el precio a $2500, la deuda de Mayo **sigue siendo $2000**.
*   *¿Por qué?*: Protege al socio de aumentos retroactivos y mantiene la transparencia histórica.

### Descuentos para Socios
Las categorías (excepto la Cuota Social) pueden tener descuentos configurados para quienes sean "Socio Activo".
*   **Porcentaje**: Un descuento del 20%, por ejemplo.
*   **Monto Fijo**: Un descuento de $1000, por ejemplo.
*   **Prioridad**: Si se configuran ambos, el sistema prioriza el porcentaje. El descuento se aplica en el momento en que se genera la cuota.

---

## 4. Operativa Diaria

### Liquidación Mensual
El sistema genera automáticamente las cuotas de todos los socios el **día 1 de cada mes a las 00:00**. 
*   Si un socio se anota a una actividad el día 15, el Administrador o Cobrador debe usar la opción **"Adelantar Cuota"** para generarle el mes actual manualmente.

### Registro de Cobros
Al cobrar una cuota, se debe seleccionar el método (**Efectivo** o **Transferencia**). 
*   Cada pago queda asociado al usuario que lo registró, permitiendo saber quién recaudó cuánto al final del día.

### Seguridad y Auditoría
*   Las contraseñas están encriptadas.
*   No se pueden borrar pagos registrados. Si hubo un error, solo un administrador puede anular un pago (lo cual deja rastro en el sistema).
*   Las sesiones expiran automáticamente después de 12 horas por seguridad.

---

## 5. Preguntas Frecuentes

**¿Por qué no puedo borrar una categoría?**
No puedes borrar una categoría si tiene socios asignados o si ya existen cuotas (pagas o impagas) asociadas a ella. En su lugar, debes marcarla como **INACTIVA**. Esto protege la integridad de los reportes históricos.

**¿Qué pasa si un socio debe muchos meses?**
El sistema lo pasará automáticamente a estado **INACTIVO** al superar los 3 meses de deuda en su Cuota Social. Esto sirve como alerta visual para el cobrador.

**¿Cómo cambio el precio de una actividad?**
En la sección **Categorías**, edita el "Monto Actual". Recuerda que este cambio solo afectará a las cuotas que se generen *después* del cambio.

---

## 6. Guía Paso a Paso (Tutoriales)

A continuación, se detallan los pasos exactos para realizar las tareas más comunes en el sistema:

### ¿Cómo registrar un nuevo socio?
1. Ve a la sección **Socios** en el menú principal.
2. Haz clic en el botón **"Nuevo Socio"** (arriba a la derecha).
3. Completa el formulario con los datos personales (Nombre, DNI, Email, etc.).
4. Haz clic en **Guardar**. El socio quedará registrado en el sistema.

### ¿Cómo asignar una categoría o actividad a un socio?
1. Ve a la sección **Socios** y busca al socio en la lista.
2. Haz clic en el ícono del **ojo** para ver su perfil detallado.
3. En la columna izquierda, busca la sección **"Categorías asignadas"**.
4. Haz clic en el botón **"+" (Agregar Categoría)**.
5. Selecciona la categoría deseada de la lista desplegable y confirma.

### ¿Cómo cobrar una cuota?
1. Ve al perfil del socio (desde la sección **Socios** o usando el buscador).
2. En la columna derecha ("Estado de Cuenta"), verás las cuotas **PENDIENTES**.
3. Haz clic en la casilla de verificación (checkbox) junto a la cuota que el socio desea pagar. Puedes seleccionar varias a la vez.
4. En el panel inferior que aparece, selecciona el **Método de Pago** (Efectivo o Transferencia).
5. Haz clic en **"Confirmar Pago"**. El estado cambiará a PAGADA y se registrará tu nombre como cobrador.

### ¿Cómo adelantar la cuota del mes actual o meses futuros?
*Nota: Útil cuando un socio se inscribe a mitad de mes y el sistema no generó su cuota automáticamente.*
1. En el perfil del socio, ve a la sección "Estado de Cuenta".
2. Haz clic en el botón **"Adelantar Cuota"**.
3. Selecciona la **Categoría**, el **Mes** y el **Año** que deseas generar.
4. Haz clic en **Guardar**. La cuota aparecerá como PENDIENTE y ya podrás cobrarla.

### ¿Cómo crear una nueva categoría de cobro?
*(Solo para Administradores)*
1. Ve a la sección **Categorías**.
2. Rellena el formulario de "Nueva categoría" en la parte superior.
3. Ingresa el **Nombre** (ej: Básquet) y el **Monto actual**.
4. Si quieres que los socios (los que pagan Cuota Social) tengan descuento, marca **"¿Habilitar Descuento Socio?"** y completa el porcentaje (%) o monto fijo ($).
5. Haz clic en **Crear**.

### ¿Cómo cargar un gasto (Egreso)?
1. Ve a la sección **Egresos** en el menú.
2. Haz clic en **"Nuevo Egreso"**.
3. Selecciona la **Categoría** del gasto (ej: Mantenimiento, Sueldos, Impuestos).
4. Ingresa el **Monto** exacto y una breve **Descripción** (ej: "Compra de artículos de limpieza").
5. Haz clic en **Guardar**.

### ¿Cómo enviar recordatorios de deuda?
*(Funcionalidad que conecta con servicios de mensajería configurados)*
1. En la sección **Socios**, ve a la pestaña **"Deudores"**.
2. Selecciona a los socios a los que deseas avisar marcando la casilla junto a su nombre.
3. Haz clic en **"Enviar Recordatorios"**.
4. Selecciona si deseas enviar por **Email** o **WhatsApp** (si están habilitados).
5. Haz clic en **Confirmar**.
