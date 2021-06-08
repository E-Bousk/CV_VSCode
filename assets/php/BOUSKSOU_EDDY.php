<?php
    /**
    * Class CV | fichier BOUSKSOU_EDDY.php
    *
    * Classes souhaitant déboucher sur un stage (non rémunéré) en entreprise du 09 Août au 15 Octobre 2021
    *
    * @package Motivé, rigoureux, curieux, persévérant et passionné
    *
    * @author BOUSKSOU Eddy
    * @copyright 2021-2022 e.bousk@gmail.com
    * @version v1.0
    */
    class CV {
        private $_sTitreFront= "
            Développer la partie front-end d'une application web ou web mobile en intégrant les recommandations de sécurité ";
        private $_sDetailFront= "
            - Maquette et réalisation graphique de site internet <br>
            - Réaliser une interface utilisateur web statique et adaptable <br>
            - Développer une interface utilisateur web dynamique <br>
            - Réaliser une interface utilisateur avec une solution de gestion de contenu ou e-commerce <br>";

        private $_sTitreBack= "
            Développer la partie back-end d'une application web ou web mobile en intégrant les recommandations de sécurité ";
        private $_sDetailBack= "
            - Créer une base de donnée <br>
            - Développer les composants d'accès aux données <br>
            - Développer la partie back-end d'une application web ou web mobile <br>
            - Elaborer et mettre en œuvre des composants dans une application de gestion de contenu ou e-commerce <br>";

        protected function _afficher_competences() {
            echo "<b>" . $this->_sTitreFront . " :</b><br>" . $this->_sDetailFront . "<br>";
            echo "<b>" . $this->_sTitreBack . " :</b><br>" . $this->_sDetailBack . "<br>";
        }

        protected function _afficher_experiences_professionnelles($sExperiencesProfesionnelles) {
            switch ($sExperiencesProfesionnelles) {
                case "2014-2020":
                    echo "Responsable rayon fruits & légumes - BIOCOOP Lunel (" . $sExperiencesProfesionnelles . ") <br>";
                    break;
                case "2009-2010":
                    echo "Animateur atelier informatique École - Marie Curie Lunel (" . $sExperiencesProfesionnelles . ") <br>";
                    break;
                case "2000-2007":
                    echo "Technicien, monteur, réparateur, vendeur informatique - SARL CASH CONVERTERS Montpellier (" . $sExperiencesProfesionnelles . ") <br>";
                    break;
                case "1992-1997":
                    echo "Agent de maîtrise (« leader future expansion ») - Eurodisney SCA Marne-la-vallée (" . $sExperiencesProfesionnelles . ") <br>";
                    break;
            }
        }

        protected function _afficher_infos_complementaires() {
            echo "Anglais, Autonomie, Capacité d'adaptation, Réactivité, Sens de l'organisation, Travail en équipe. ";
        }
    }

    /**
    * Class Competences | fichier BOUSKSOU_EDDY.php
    */
    class Competences extends CV {
        public function __construct() {
            parent::_afficher_competences();
        }
    }

    /**
    * Class ExperiencesProfesionnelles | fichier BOUSKSOU_EDDY.php
    */
    class ExperiencesProfesionnelles extends CV {
        public function __construct($sExperiencesProfesionnelles) {
            parent::_afficher_experiences_professionnelles($sExperiencesProfesionnelles);
        }
    }

    /**
    * Class OtherAssets | fichier BOUSKSOU_EDDY.php
    */
    class OtherAssets extends CV {
        public function __construct() {
            parent::_afficher_infos_complementaires();
        }
    }

    $oCompetences= new Competences();
    
    echo "<b> Experiences Profesionnelles : </b></br>";
    $oExperiences1= new ExperiencesProfesionnelles("2014-2020");
    $oExperiences2= new ExperiencesProfesionnelles("2009-2010");
    $oExperiences3= new ExperiencesProfesionnelles("2000-2007");
    $oExperiences4= new ExperiencesProfesionnelles("1992-1997");

    echo "</br><b> Divers : </b></br>";
    $oAssets= new OtherAssets();
?>