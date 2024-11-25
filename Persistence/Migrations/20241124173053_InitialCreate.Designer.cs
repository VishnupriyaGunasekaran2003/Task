﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Persistence;

#nullable disable

namespace Persistence.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20241124173053_InitialCreate")]
    partial class InitialCreate
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "8.0.3");

            modelBuilder.Entity("Domain.Ticket", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("Date")
                        .HasColumnType("TEXT");

                    b.Property<string>("Destination")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<decimal>("Fare")
                        .HasColumnType("TEXT");

                    b.Property<int>("NumberOfPassengers")
                        .HasColumnType("INTEGER");

                    b.Property<string>("PaymentStatus")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("StartStation")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("TicketQr")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Tickets");
                });
#pragma warning restore 612, 618
        }
    }
}
