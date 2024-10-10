import {redirect} from "@sveltejs/kit";

export function load() {
    throw redirect(302, 'https://drive.google.com/file/d/1gzWW0nMFLvLOpp9h6z1a7_URUvA_FgIl/view?');
}