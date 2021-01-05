<?php
/*       MainController.php       */

namespace App\Controller;

// Setup.
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class MainController extends AbstractController
{
  #[Route("/", name: "home")]
  public function index()
  {
    return $this->render(view: "home/index.html.twig");
  }

  #[Route("/hello", name: "hello")]
  public function hello()
  {
    return new Response(content: "<h1>Hello world!<h1>");
  }

  #[Route("/custom/{name?}", name: "custom")]
  public function custom(Request $request)
  {
    $name = $request->get(key: "name");
    return $this->render("home/custom.html.twig", ["name" => $name,]);
  }
}
