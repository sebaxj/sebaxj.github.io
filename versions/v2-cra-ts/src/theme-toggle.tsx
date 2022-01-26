import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const ThemeToggler = () => {
	const { toggleColorMode } = useColorMode();

	return (
		<IconButton
			aria-label="Toggle Dark Mode"
			colorScheme={useColorModeValue('grey', 'yellow')}
			icon={useColorModeValue(<MoonIcon color="#2D3748" />, <SunIcon color="#2D3748" />)}
			onClick={toggleColorMode}
		></IconButton>
	);
};

export default ThemeToggler;
