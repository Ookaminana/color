import { RoutesMap } from './utils/route'

/**
 * Маршруты
 */

export const routes: RoutesMap = {
    form: '/form',
    palette: '/palette',    
}

/**
 * Шрифты, которые должны быть принудительно предзагружены.
 */
export const fontsForPreload = [
    '100 14px Roboto',
    'italic 100 14px Roboto',
    '300 14px Roboto',
    'italic 300 14px Roboto',
    '14px Roboto',
    'italic 14px Roboto',
    '500 14px Roboto',
    'italic 500 14px Roboto',
    'bold 14px Roboto',
    'italic bold 14px Roboto',
    '900 14px Roboto',
    'italic 900 14px Roboto',
]

export const MAX_UPLOADING_PHOTO_SIZE = 10 * 1024 * 1024 // 10Mb
export const MAX_UPLOADING_DOCUMENT_SIZE = 50 * 1024 * 1024 // 50Mb
