package com.app.entities;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Setter
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Packagee extends BaseEntity {
	@Column(nullable=false)
	String package_name;
	@Column(nullable=false)
	double package_price;
	String img1,img2,img3;
	@Column(name="book_date",nullable=false)
	LocalDate addedDate;
	@Column(nullable=false)
	String description;
	@Column(name="package_duration",nullable=false)
	int duration;
	boolean status=false;
	
	public String getpackage_name() {
        return package_name;
    }

    public void setpackage_name(String name) {
        this.package_name = name;
    }

    public double getpackage_price() {
        return package_price;
    }

    public void setpackage_price(double price) {
        this.package_price = price;
    }

    public LocalDate getAddedDate() {
        return addedDate;
    }
	public void setAddedDate(LocalDate addedDate) {
        this.addedDate = addedDate;
    }
	public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }
}
