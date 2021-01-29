// dummy middleware for db (set's request.db)
// https://gist.github.com/joshnuss/37ebaf958fe65a18d4ff
/*
This is great. I do have one question.
I've read online in other places that role-based auth is not idea.
Rather, it's better to assign permissions to each role,
and then check if that user has that particular permission. Thoughts on this?
----------------------------------------------------------------------------
that's a good point, generally it depends on the size of application.
But yeah, for most things role-based or some other form is best.

You can make it work by changing permit()
to take permissions instead of roles, ie permit('project:create', 'project:update')
and then change isAllowed() to check user.role.permissions instead of user.role.
*/
export default function loadDb(request, _response, next) {
  
  // dummy db
  request.db = {
    users: {
      findByApiKey: async token => {
        switch (token) {
          case token == '1234':
            return {role: 'owner', id: 1234};
          case token == '5678':
            return {role: 'employee', id: 5678};
          default:
            return null; // no user
        }
      }
    }
  };
  
  next();
}