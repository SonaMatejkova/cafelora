import { Layer } from '../Layer';

export const LayerList = (props) => {
  let layerList = '';
  for (let i = 0; i < props.items.length; i++) {
    layerList += Layer(props.items[i]);
  }
  return layerList;
};
