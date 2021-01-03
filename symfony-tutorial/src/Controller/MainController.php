<?php
/*       MainController.php       */

namespace App\Controller;

// Setup.
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MainController extends AbstractController
{
    #[ Route("/", name: "home")]
    public function index()
    {
        return new Response(content: "<h1>My first PHP webpage.</h1>");
    }

    #[ Route("/custom", name: "custom")]
    public function custom()
    {
        return new Response(content: "<h1>My first secondary route in a PHP webpage.</h1>");
    }
}
