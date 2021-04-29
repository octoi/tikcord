import IconButton from './sidebar/IconButtton';
import { HomeIcon, UserIcon, CogIcon, PlusCircleIcon } from '@heroicons/react/solid'

export default function Sidebar() {
    return (
        <div>
            <IconButton Icon={HomeIcon} text="Home" link="/app" />
            <IconButton Icon={UserIcon} text="Profile" link="/app/profile" mt />
            <IconButton Icon={CogIcon} text="Settings" link="/app/settings" mt />
            <IconButton Icon={PlusCircleIcon} text="Create" link="/app/new" mt solid />
        </div>
    );
}