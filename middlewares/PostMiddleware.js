const PostAthentication = async (req, res, next) => {
  if (!req.body.title || !req.session.userid) {
    console.log('title is not found');
    return;
  }
  next();
};

module.exports = PostAthentication;
