<!DOCTYPE html>
<html>
    <head>
        <title>Demo App</title>
    </head>
    <body>
        <div class="container">
            <div class="content">
                <table class="table table-striped">
                    <tr>
                        <th>Name</th>
                        <th>E-mail</th>
                        <th>Posts</th>
                        <th>Albums</th>
                        <th>To Dos</th>
                    </tr>
                    @foreach($users as $user)
                        <tr>
                            <td>{{ $user->name }}</td>
                            <td>{{ $user->email }}</td>
                            <td>
                                <button class="btn btn-primary get-posts" data-id="{{ $user->api_id }}">
                                    <i class="glyphicon glyphicon-pencil"></i>
                                </button>
                            </td>
                            <td>
                                <button class="btn btn-success get-albums" data-id="{{ $user->api_id }}">
                                    <i class="glyphicon glyphicon-book"></i>
                                </button>
                            </td>
                            <td>
                                <button class="btn btn-danger get-todos" data-id="{{ $user->api_id }}">
                                    <i class="glyphicon glyphicon-tasks"></i>
                                </button>
                            </td>
                        </tr>
                    @endforeach
                </table>
            </div>
        </div>
    </body>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">

    <!-- Optional theme -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">

    <!-- Latest compiled and minified JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>

    <script src="/js/app.js"></script>
    <script src="/js/handlebars.runtime-v3.0.3.js"></script>
    <script src="/js/template.js"></script>
</html>
