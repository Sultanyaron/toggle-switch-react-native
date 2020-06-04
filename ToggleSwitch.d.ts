declare module 'toggle-switch-react-native' {
	import { TextStyle } from 'react-native';

	export interface ToggleSwitchProps {
		isOn?: boolean;
		onColor?: string;
		offColor?: string;
		label?: string;
		labelStyle?: TextStyle;
		size?: 'large' | 'medium' | 'small';
		icon?: React.StatelessComponent;
		onToggle: (isOn: boolean) => void;
		disabled?: boolean;
	}

	const content: React.StatelessComponent<ToggleSwitchProps>;
	export default content;
}
