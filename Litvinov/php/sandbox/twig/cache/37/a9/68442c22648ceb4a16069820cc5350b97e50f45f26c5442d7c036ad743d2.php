<?php

/* index.html */
class __TwigTemplate_37a968442c22648ceb4a16069820cc5350b97e50f45f26c5442d7c036ad743d2 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        echo "<!DOCTYPE html>
<html lang=\"en\">
<head>
    <meta charset=\"UTF-8\">
    <title> ";
        // line 5
        echo twig_escape_filter($this->env, (isset($context["title"]) ? $context["title"] : null), "html", null, true);
        echo " </title>
</head>
<body>
   <h1> Приложние  работает нормально  </h1>
   ";
        // line 9
        $this->env->loadTemplate("nav.html")->display($context);
        // line 10
        echo "</body>
</html>";
    }

    public function getTemplateName()
    {
        return "index.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  34 => 10,  32 => 9,  25 => 5,  19 => 1,);
    }
}
