import { createSlice } from '@reduxjs/toolkit';

//Стили
import { ImageObj } from '@/types/types';

const imageSlice = createSlice({
    name: 'images',
    initialState: {
        previewImages: [],
    },
    reducers: {
        deleteImg(state, action) {

        },
    }
})