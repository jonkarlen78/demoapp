<?php
/**
 * Created by PhpStorm.
 * User: jon
 * Date: 8/7/15
 * Time: 4:50 PM
 */

use Illuminate\Database\Seeder;
use GuzzleHttp\Client;

class UsersFromAPISeeder extends Seeder {

    /**
     * For purposes of this test app we are going to populate our users with users from JSONPlaceHolder.com's test API
     */
    public function run()
    {
        $api_client = new Client();
        $request = $api_client->get('http://jsonplaceholder.typicode.com/users');

        if( $request->getStatusCode() != 200 )
        {
            throw new Exception("Unable to get test data.  The following error occurred: " . $request->getStatusCode());
        }

        $data = json_decode( $request->getBody() );

        foreach( $data as $user_data )
        {
            $user = new \App\User();
            $user->name = $user_data->username;
            $user->email = $user_data->email;
            $user->api_id = $user_data->id;
            $user->save();
        }
    }

}