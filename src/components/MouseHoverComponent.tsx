import withHoverHOC from './withHoverHOC';

/* Type of MouseHoverComponent props */

interface Props {
  textColor: string;
  textHover: string;
  onMouseOver: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
}

/* Wrapper component */
const MouseHoverComponent: React.FC<Props> = (props) => {
  const { textColor, textHover, ...divProps } = props;
  return (
    <div>
      <h2 {...divProps} style={{ color: textColor }}>
        Mouse {textHover ? 'Over' : 'Out'}
      </h2>
    </div>
  );
}

export default withHoverHOC(MouseHoverComponent);
