import IconButton from './sidebar/IconButtton';
import NewPost from './NewPost';
import { HomeIcon, UserIcon, CogIcon, PlusCircleIcon } from '@heroicons/react/solid'
import { seDisclosure } from '@chakra-ui/react';

export default function Sidebar() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <div>
            <IconButton Icon={HomeIcon} text="Home" link="/app" />
            <IconButton Icon={UserIcon} text="Profile" link="/app/profile" mt />
            <IconButton Icon={CogIcon} text="Settings" link="/app/settings" mt />
            <IconButton Icon={PlusCircleIcon} text="Create" mt solid onClick={onOpen} />
            <NewPost isOpen={isOpen} onClose={onClose} />
        </div>
    );
}