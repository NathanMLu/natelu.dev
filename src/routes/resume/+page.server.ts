import {redirect} from "@sveltejs/kit";

export function load() {
    throw redirect(302, 'https://drive.google.com/file/d/1rZa4k4A6UeTQFPIWnjIWdojiW3Q7Zu6j/view');
}