import { createAction, props } from "@ngrx/store";

export const loadProduct = createAction(
    "Load Product", props<{ product: any }>()
)

export const addNewProduct = createAction(
    "Add New Product", props<{ product: any }>()
)

export const addToCart = createAction(
    "Add To Cart", props<{ id: number, product: any }>()
)

export const deleteFromCart = createAction(
    "Delete From Cart", props<{ id: number }>()
)

export const editProduct = createAction(
    "Edit Product", props<{ product: any }>()
)

export const increaseCount = createAction(
    "Increase Count", props<{ id: number }>()
)

export const decreaseCount = createAction(
    "Decrease Count", props<{ id: number }>()
)

export const emptyCart = createAction(
    "Empty Cart", props<{ id: any }>()
)

export const writeText = createAction(
    "Text", props<{ text: any }>()
)

export const deleteCartItem = createAction(
    "Delete Cart Item", props<{ id: number }>()
)