<?php

namespace Tests\Feature;

use App\User;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class LogoutApiTest extends TestCase
{
    use RefreshDatabase;

    public function setUp() : void 
    {
        parent::setUp();

        // テストユーザー作成
        $this->user = factory(User::class)->create();
        $this->logout = route('logout');
    }

    /**
     * @test
     */
    public function should_認証済みのユーザーをログアウトさせる() : void
    {
        var_dump($this->logout);
        $response = $this->actingAs($this->user)->json('POST', $this->logout);

        $response->assertStatus(200);
        $this->assertGuest();
    }
}