import Styles from './GIFComp.module.scss';

const GIFComp = ({ src }: any) => {
  return (
    <div className={Styles.gifView}>
      <div className={`${Styles.hoverBox} border rounded shadow-sm`}>
        <img
          src={src.media[0].tinygif.url}
          className="w-100 rounded"
          alt={src.content_description}
        />
      </div>
    </div>
  );
};

export default GIFComp;
