
import { createAction } from '@reduxjs/toolkit';


export const addCity = createAction<string[]>('city/addCity');


export const removeCity = createAction<string>('city/removeCity');
