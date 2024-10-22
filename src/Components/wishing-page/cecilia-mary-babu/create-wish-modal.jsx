import React from 'react';

function CreateWishModal(props) {
  let {
    wishData,
    updateWishText,
    updateWishCreator,
    renderProfilePic,
    renderBoyPics,
    renderGirlPics,
    updateProfilePic,
    setIsConfirmMode,
  } = props;

  const boyPics = renderBoyPics();
  const girlPics = renderGirlPics();

  console.log('Boy Pics:', boyPics);
  console.log('Girl Pics:', girlPics);

  return (
    <>
      <div className="modal-body">
        <textarea
          type="text"
          className="d-block mx-auto border border-2 m-2"
          placeholder="Type Your Wish"
          rows={8}
          value={wishData.text}
          onChange={(e) => updateWishText(e.target.value)}
        />
        <input
          type="text"
          className="d-block mx-auto border border-2"
          placeholder="Your Name"
          value={wishData.creator}
          onChange={(e) => updateWishCreator(e.target.value)}
        />
        <div className="mb-3">
          <label htmlFor="profilePic" className="form-label text-primary">
            Choose a profile picture
          </label>
          <div className="row">
            {boyPics.map((pic, index) => (
              <div key={`boy-${index}`} className="col-3 mb-3">
                <img
                  src={pic}
                  alt={`Boy profile ${index + 1}`}
                  className="img-fluid rounded cursor-pointer"
                  onClick={() => updateProfilePic(pic)}
                  onError={(e) => {
                    console.error(`Failed to load image: ${pic}`);
                    e.target.onerror = null;
                    e.target.src = 'path/to/fallback/image.jpg';
                  }}
                />
              </div>
            ))}
            {girlPics.map((pic, index) => (
              <div key={`girl-${index}`} className="col-3 mb-3">
                <img
                  src={pic}
                  alt={`Girl profile ${index + 1}`}
                  className="img-fluid rounded cursor-pointer"
                  onClick={() => updateProfilePic(pic)}
                  onError={(e) => {
                    console.error(`Failed to load image: ${pic}`);
                    e.target.onerror = null;
                    e.target.src = 'path/to/fallback/image.jpg';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          Close
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => setIsConfirmMode(true)}
        >
          Send Wish
        </button>
      </div>
    </>
  );
}

export default CreateWishModal;
