import useAuthContext from '../../context/contextHook';
import IconButton from './sidebar/IconButtton';
import NewPost from './NewPost';
import styles from '../../styles/App.module.css';
import { HomeIcon, UserIcon, CogIcon, PlusCircleIcon } from '@heroicons/react/solid'
import { useDisclosure } from '@chakra-ui/react';

export default function Sidebar() {
    const newPostPopup = useDisclosure();
    const settingsPopup = useDisclosure();
    const { user } = useAuthContext();

    return (
        <div className={styles.sidebar}>
            <IconButton Icon={HomeIcon} text="Home" link="/app" />
            <IconButton Icon={UserIcon} text="Profile" link={`/account/${user.email}`} mt />
            <IconButton Icon={CogIcon} text="Settings" mt />
            <IconButton Icon={PlusCircleIcon} text="Create" mt solid onClick={newPostPopup.onOpen} />
            <NewPost isOpen={newPostPopup.isOpen} onClose={newPostPopup.onClose} />
        </div>
    );
}