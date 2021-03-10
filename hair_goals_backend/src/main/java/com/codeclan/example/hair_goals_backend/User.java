package com.codeclan.example.hair_goals_backend;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.sun.tools.javah.Gen;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "hair_length")
    private Integer hairLength;

    @Column(name = "goal_hair_length")
    private Integer goalHairLength;

    @Column(name = "growth_rate")
    private Integer growthRate;

    @Column(name = "time_till_goal")
    private Integer timeTillGoal;

    @JsonIgnoreProperties(value = "user")
    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    private List<Measurement> measurements;

    public User(String name, Integer hairLength, Integer goalHairLength) {
        this.name = name;
        this.hairLength = hairLength;
        this.goalHairLength = goalHairLength;
        this.growthRate = 1;
        this.timeTillGoal = 0;
        this.measurements = new ArrayList<Measurement>();
    }

    public User() {}

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public Integer getHairLength() {
        return hairLength;
    }
    public void setHairLength(Integer hairLength) {
        this.hairLength = hairLength;
    }
    public Integer getGoalHairLength() {
        return goalHairLength;
    }
    public void setGoalHairLength(Integer goalHairLength) {
        this.goalHairLength = goalHairLength;
    }
    public Integer getGrowthRate() {
        return growthRate;
    }
    public void setGrowthRate(Integer growthRate) {
        this.growthRate = growthRate;
    }
    public List<Measurement> getMeasurements() {
        return measurements;
    }

    public Integer getTimeTillGoal() {
        return timeTillGoal;
    }

    public void setTimeTillGoal() {
        this.timeTillGoal = (goalHairLength - hairLength) / growthRate;
    }

    public void addMeasurement (Measurement measurement){
        this.measurements.add(measurement);
    }
    public void setMeasurements(ArrayList<Measurement> measurements) {
        this.measurements = measurements;
    }
}
