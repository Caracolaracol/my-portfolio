import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

export default function LightboxImages({ images, children }: any) {
  const [open, setOpen] = React.useState(false);
  const [closeOnPullDown, setCloseOnPullDown] = React.useState(true);
  const [closeOnBackdropClick, setCloseOnBackdropClick] = React.useState(true);
  return (
    <>
      <div className='' onClick={() => setOpen(true)}>
        {children}
      </div>
      <Lightbox
        open={open}
        render={{
          buttonPrev: () => null,
          buttonNext: () => null,
        }}
        controller={{ closeOnPullDown, closeOnBackdropClick }}
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .9)",padding:'5vw' } }}
        close={() => setOpen(false)}
        plugins={[Zoom]}
        slides={[
          { src: images }
        ]}
      />
    </>

  );
}