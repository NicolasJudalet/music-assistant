<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ExerciseRepository")
 */
class Exercise
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $exerciseType;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $exerciseName;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $description;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getExerciseType(): ?string
    {
        return $this->exerciseType;
    }

    public function setExerciseType(string $exerciseType): self
    {
        $this->exerciseType = $exerciseType;

        return $this;
    }

    public function getExerciseName(): ?string
    {
        return $this->exerciseName;
    }

    public function setExerciseName(string $exerciseName): self
    {
        $this->exerciseName = $exerciseName;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }
}
