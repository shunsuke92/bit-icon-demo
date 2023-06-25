import { Idendicon } from '~/types';
import { BitIcon, Options } from 'bit-icon';

export const useIdenticonsState = () => {
  const { settingInfo } = useSettingInfoState();

  const initialData = () => {
    const data: Idendicon[] = [];
    for (let i = 0; i < 100; i += 1) {
      const character = getRandomName();
      const hash = charToHash(character);
      const options: Options = {
        size: 80,
        type: 'normal',
      };
      const bitIcon = new BitIcon(hash, options);
      const svg = bitIcon.toSvg();

      const icon: Idendicon = {
        id: i.toString(),
        character: character,
        size: 420,
        color: bitIcon.color,
        background: bitIcon.background,
        type: 'normal',
        displaySize: 80,
        svg: svg,
      };
      data.push(icon);
    }
    return data;
  };

  const identicons: Ref<Idendicon[]> = useState('identicons', () => initialData());

  const updateIdenticons = (value: Idendicon[]) => {
    identicons.value = value.map((identicon) => ({ ...identicon, svg: getNewSvg(identicon) }));
  };

  const recreateIdenticons = () => {
    identicons.value = identicons.value.map((identicon) => ({
      ...identicon,
      ...getNewIdenticon(identicon),
    }));
  };

  const getNewSvg = (identicon: Idendicon) => {
    const hash = charToHash(identicon.character);
    const options: Options = {
      size: identicon.displaySize,
      color: identicon.color,
      background: identicon.background,
      type: identicon.type,
    };
    const bitIcon = new BitIcon(hash, options);
    const svg = bitIcon.toSvg();
    return svg;
  };

  const getNewIdenticon = (identicon: Idendicon) => {
    const type = settingInfo.value.type === 'random' ? getRandomType() : settingInfo.value.type;
    const character = getRandomName();
    const hash = charToHash(character);
    const options: Options = {
      size: identicon.displaySize,
      type: type,
    };
    const bitIcon = new BitIcon(hash, options);
    const svg = bitIcon.toSvg();
    const color = bitIcon.color;
    const background = bitIcon.background;

    return { character, svg, color, background, type };
  };

  return {
    identicons,
    updateIdenticons,
    recreateIdenticons,
  };
};
