import {redirect} from "@sveltejs/kit";

export function load() {
    throw redirect(302, 'https://drive.google.com/file/d/10BW85DZIXy4Two8h4jSPARf5oeap_qOT/preview');
}